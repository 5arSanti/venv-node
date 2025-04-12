from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
options.add_argument("--window-size=1920,1080")

driver = webdriver.Chrome(options=options)

try:
    driver.get("https://www.buscadordeempleo.gov.co")
    time.sleep(5)

    search_box = driver.find_element(By.NAME, "search-job-input")
    search_box.send_keys("Desarrollador")

    search_button = driver.find_element(By.TITLE, 'Buscar')
    search_button.click()

    time.sleep(5)

    results = driver.find_elements(By.CLASS_NAME, "export-container")
    for result in results:
        print(result)

finally:
    # Cerrar el navegador
    driver.quit()