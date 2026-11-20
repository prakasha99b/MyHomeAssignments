// Import the Playwright Test function.
import test from "@playwright/test";

// Import the path module to construct the file path.
import path from "path";

// Create a test to learn file upload using an input tag.
test("Test to learn file download", async ({ page }) => {

    // Navigate to the Blazorise File Picker page.
    await page.goto("https://demoqa.com/upload-download");

    //Wait for the filechooser
    const fileDownloadPromise=page.waitForEvent("download");

    //Locate the "Download" element and click it to open the file chooser. 
    await page.getByRole("button", {name: "Download"}).click();
    
    // Wait for and capture the file chooser object.
    const fileDownload = await fileDownloadPromise;

    // Set the file to be uploaded using the absolute file path.
    // await fileDownload.saveAs(path.join(__dirname, `../Download/${fileDownload.suggestedFilename()}`));
    await fileDownload.saveAs(path.join(__dirname, "../Download/TestLeaf.png"));
})