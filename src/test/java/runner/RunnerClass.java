package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\Shaan\\IdeaProjects\\SimpleBDDFramework\\src\\test\\resources\\Features",
        glue ={"stepdefinition"},
        //dryRun = true
        format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"}
)

public class RunnerClass {


}
