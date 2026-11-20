// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the file path.
import path from "path";

// Create a test to learn file upload using an input tag.
test("Test to learn file upload without input tag", async ({ page }) => {

    // Navigate to the Blazorise File Picker page.
    await page.goto("https://blazorise.com/docs/components/file-picker");

    //Wait for the filechooser
    const fileUploadPromise=page.waitForEvent("filechooser");

    //Locate the "Choose files" element and click it to open the file chooser. 
    await page.locator("//span[text() = 'Choose files']").first().click();
    
    // Wait for and capture the file chooser object.
    const fileUpload = await fileUploadPromise;

    // Set the file to be uploaded using the absolute file path.
    await fileUpload.setFiles(path.join(__dirname, "../file/sampleFile.jpeg"));
})