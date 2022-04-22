import time
import warnings
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Disable Deprecation warning to avoid spamming console
warnings.filterwarnings("ignore", category=DeprecationWarning)

# Open a file with access mode 'a'
facts_file = open('facts.txt', 'a')

# Create a new firefox window
driver = webdriver.Firefox()

# Search for random facts
driver.get('https://www.google.com/search?client=firefox-b-d&q=i%27m+feeling+curious&ved=2ahUKEwiz9c-C1Kf3AhXGAewKHaJHBMAQ73N6BAgKEA0')
driver.find_element_by_id('L2AGLb').click()

# Endless loop to run the program forever
n = 1
while n != 5:
    # Wait a few seconds to load
    time.sleep(3)

    # Get the fact title
    element_fact_title = driver.find_element_by_class_name("sW6dbe")
    fact_title = element_fact_title.text

    # Get the fact
    element_fact = driver.find_element_by_class_name("DRBylb")
    fact = element_fact.text

    # Write the fact to the text file
    facts_file.write('\n' + fact_title + ';' + fact)

    # Refresh the page to get a new fact
    driver.refresh()

driver.close()
facts_file.close()