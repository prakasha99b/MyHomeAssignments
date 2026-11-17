
//Import test from Playwright
import test from "@playwright/test";

test("Test to learn alert", async({page})=>{

await page.goto("https://leafground.com/alert.xhtml");

page.on("dialog", async(dialogAlert)=>{
switch(dialogAlert.type()){
    case "alert":
        dialogAlert.accept();
        break;
    case "confirm":
        dialogAlert.dismiss();
        break;
    case "prompt":
        dialogAlert.accept("TestLeaf");
        break;
}})
//Simple alert
await page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click();
//confirm alert
await page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click();
// //prmopt alert
await page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click();
});