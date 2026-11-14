//Import test from Playwright
import test, { expect } from "@playwright/test";

//Test to verify the button availablity
test("Test to verify the button", async({page})=>{

//Load the URL
await page.goto("https://leaftaps.com/opentaps/control/main");

await expect(page).toHaveTitle("Leaftaps - TestLeaf Automation Platform");

//Verify Login button is visible in the page
let button=page.getByRole("button", {name:"login"});
await expect(button).toBeVisible();

//printing the log to ensure script ran completely
console.log("Script executed completely");
})