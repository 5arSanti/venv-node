from selenium import webdriver

print("Hello World")

# Initialize the Chrome driver
driver = webdriver.Chrome()
# Open a website
driver.get("https://automatic-xylophone-px7prgx9jj6265g6-5173.app.github.dev/")
# Close the driver
driver.quit()