import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Disable Deprecation warning to avoid spamming console
warnings.filterwarnings("ignore", category=DeprecationWarning)

# Open a file with access mode 'a'
facts_file = open('facts.txt', 'a')

# Create a new firefox window
browser = webdriver.Firefox()

# Search for random facts
browser.get('https://www.google.de/')
browser.find_element_by_id('L2AGLb').click()

# Find the search bar and search
search = browser.find_element_by_name('q')
search.send_keys("i'm feeling curious")

# Hit return after you enter search text
search.send_keys(Keys.RETURN)

# Sleep for 5 seconds so you can see the results
time.sleep(5)

# Endless loop to run the program forever
n = 1
while n != 2:
    # Wait a few seconds to load
    time.sleep(5)

    # Get the fact title
    element_fact_title = browser.find_element_by_class_name("sW6dbe")
    fact_title = element_fact_title.text

    # Get the fact
    element_fact = browser.find_element_by_class_name("DRBylb")
    fact = element_fact.text

    # Write the fact to the text file
    facts_file.write('\n' + fact_title + ';' + fact)

    # Refresh the page to get a new fact
    browser.refresh()

browser.close()
facts_file.close()