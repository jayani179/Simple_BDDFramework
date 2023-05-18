package stepdefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Registration {

    WebDriver driver;
//    public Registration(WebDriver driver){
//        this.driver=driver;
//    }
@Given("^user able to open Browser$")
public void User_able_to_open_Browser() {
    WebDriverManager.chromedriver().setup();
    driver =new ChromeDriver();
    driver.manage().window().maximize();
    // reg=new Registration(driver);
}

    @Given("^enter an Url$")
    public void Enter_an_Url()  {
        driver.get("https://demo.nopcommerce.com/");
    }


    @When("^User click on Register Link$")
    public void user_click_on_Register_Link() {
        driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();

    }
    @Then("^user verify registration page$")
    public void user_verify_registration_page() {
        Assert.assertEquals("nopCommerce demo store. Register",driver.getTitle());
    }

    @Then("^Select gender$")
    public void select_gender()  {
        driver.findElement(By.id("gender-female")).click();
    }

    @Then("^Enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_Registration_detail(String fname,String lname,String email,String pwd, String Cpwd ) {

        driver.findElement(By.id("FirstName")).sendKeys(fname);
        driver.findElement(By.id("LastName")).sendKeys(lname);
        driver.findElement(By.name("Email")).sendKeys(email);
        driver.findElement(By.id("Password")).sendKeys(pwd);
        driver.findElement(By.id("ConfirmPassword")).sendKeys(Cpwd);

    }

    @Then("^Click on register button$")
    public void click_on_register_button(){
        driver.findElement(By.xpath("//*[@id=\"register-button\"]")).click();

    }


    @Then("^user close the browser$")
    public void user_close_the_browser() throws InterruptedException {
        Thread.sleep(1000);
        driver.close();


    }

}
