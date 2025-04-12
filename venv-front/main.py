from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

options = Options()
options.add_argument('--user-data-dir=/workspaces/venv-node/venv-front/chrome-data')

driver = webdriver.Chrome(options=options)

driver.get("https://automatic-xylophone-px7prgx9jj6265g6-5174.app.github.dev/")

name_input = driver.find_element(By.ID, "name")

last_name_input = driver.find_element(By.ID, "last_name")

email_input = driver.find_element(By.ID, "email")

phone_input = driver.find_element(By.ID, "phone")


name_input.send_keys("John")

last_name_input.send_keys("Doe")

email_input.send_keys("test@mail.com")

submit_button = driver.find_element(By.XPATH, '//button[@type="submit"]')

submit_button.click()

time.sleep(2)

success_message = driver.find_element(By.ID, 'mensaje-exito')

assert "Exitoso" in success_message.text

driver.quit()