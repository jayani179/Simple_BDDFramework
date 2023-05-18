package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {

    public static WebDriver driver;
    Registration reg;
    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser() {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();
       // reg=new Registration(driver);
    }

    @Given("^Enter an Url$")
    public void enter_an_Url()  {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User click on Login Link$")
    public void user_click_on_Login_Link()  {
        driver.findElement(By.className("ico-login")).click();
    }

    @When("^User on Login Page and Verify Login page Title$")
    public void user_on_Login_Page_and_Verify_Login_page_Title()  {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Login",title);
    }
    //Simple Hard coded Step.
    @Then("^User enter username and password and click on login button$")
    public void user_enter_username_and_password_and_click_on_login_button()  {
        driver.findElement(By.id("Email")).sendKeys("abcd@gmail.com");
        driver.findElement(By.id("Password")).sendKeys("Test123");
        driver.findElement(By.className("login-button")).click();
    }
    @Then("^User is on Home Page and Verify Home page Title$")
    public void user_is_on_Home_Page_and_Verify_Home_page_Title()  {

    }

    @Then("^User close the browser$")
    public void user_close_the_browser()  {
        driver.close();
    }

}
