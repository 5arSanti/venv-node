from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

options = Options()

driver = webdriver.Chrome(options=options)

try:
    driver.get("https://www.buscadordeempleo.gov.co")
    time.sleep(3)

    search_box = driver.find_element(By.NAME, "search-job-input")
    search_box.send_keys("Desarrollador")
    search_box.send_keys(Keys.RETURN)

    time.sleep(3)

    results = driver.find_elements(By.CLASS_NAME, "export-container")
    for index, result in enumerate(results):
        print(f"Resultado {index + 1}:")
        print(result.text)

        # children = result.find_elements(By.XPATH, ".//*")
        # for child in children:
        #     print(f"  - {child.tag_name}: {child.text}")

finally:
    driver.quit()