import requests
from bs4 import BeautifulSoup
import pprint


def scrape_indeed():
    url = 'https://pl.indeed.com/jobs?q=&l=Polska&sort=date&start='
    all_pages_scrapped = False
    act_start = 0
    data = []
    while not all_pages_scrapped:
        page = requests.get(url + str(act_start))
        soup = BeautifulSoup(page.content, "html.parser")
        data += scrape_page(soup)

        if is_page_last(soup):
            all_pages_scrapped = True

        act_start += 10

    return data


def scrape_page(soup):
    job_offers = soup.select('a[id^=job_]')
    job_offers += soup.select('a[id^=sj_]')  # some of offers have different ids

    scraped_data = []

    for job_offer in job_offers:
        url = 'https://pl.indeed.com' + job_offer['href']

        # there are two types of job_offer_entries
        potential_titles = job_offer.select('h2.jobTitle span')
        title = potential_titles[1].text if len(potential_titles) == 2 else potential_titles[0]

        company_tag = job_offer.select_one('span.companyName a')
        company_name = company_tag.text if company_tag else job_offer.select_one('span.companyName').text

        city = job_offer.select_one('div.companyLocation').text.partition(',')[0]

        remote = False if job_offer.select_one('div.companyLocation span.remote-bullet') is None else True

        scraped_data.append({
            'url': url,
            'title': title,
            'company_name': company_name,
            'city': city,
            'experience_level': None,
            'salary_min': None,
            'salary_max': None,
            'remote': remote,
            'active': True,
        })

    return scraped_data


def is_page_last(soup):
    nav_buttons = soup.select_one('ul.pagination-list')
    try:
        button_after_current = nav_buttons.select_one('b[aria-current="true"]').parent.next_sibling
    except AttributeError:
        return True
    print(nav_buttons.select_one('b[aria-current="true"]').text)
    return button_after_current is None


data = scrape_indeed()
pp = pprint.PrettyPrinter(indent=4, width=80)

for data_entry in data:
    pp.pprint(data_entry)
