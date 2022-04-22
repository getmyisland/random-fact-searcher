from selenium import webdriver
from selenium.webdriver.common.keys import Keys

"""Return a random fact."""
driver = webdriver.Firefox()
driver.get('https://www.google.com/search?client=firefox-b-d&q=i%27m+feeling+curious&ved=2ahUKEwiz9c-C1Kf3AhXGAewKHaJHBMAQ73N6BAgKEA0')
element = driver.find_element_by_class_name("sW6dbe")
fact_title = element.text
element_fact = driver.find_element_by_class_name("EikfZ IFC-animate")
fact = element_fact.text
driver.close()

fullfact = fact_title + '\n' + fact