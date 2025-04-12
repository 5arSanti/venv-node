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
    driver.get("http://localhost:5173")

    wait = WebDriverWait(driver, 10)
    name_input = wait.until(EC.presence_of_element_located((By.ID, "name")))
    last_name_input = wait.until(EC.presence_of_element_located((By.ID, "last_name")))
    email_input = wait.until(EC.presence_of_element_located((By.ID, "email")))
    phone_input = wait.until(EC.presence_of_element_located((By.ID, "phone")))

    name_input.send_keys("John")
    last_name_input.send_keys("Doe")
    email_input.send_keys("test@mail.com")
    phone_input.send_keys("1234567890")

    submit_button = wait.until(EC.element_to_be_clickable((By.XPATH, '//button[@type="submit"]')))
    submit_button.click()

    success_message = wait.until(EC.presence_of_element_located((By.ID, 'mensaje-exito')))
    assert "Exitoso" in success_message.text

    print("Test passed: Form submitted successfully.")

finally:
    driver.quit()