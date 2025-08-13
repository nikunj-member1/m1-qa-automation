// utils/CommonMethods.ts
import { Page } from '@playwright/test';

export class CommonMethods {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Scroll using PageDown key
  async scrollPageDown(times: number = 1, delay: number = 3000) {
    for (let i = 0; i < times; i++) {
      await this.page.keyboard.press('PageDown');
      await this.page.waitForTimeout(delay);
    }
  }

  // Wait for element and click
  async clickElement(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.click(selector);
  }

  // Type text into an input
  async typeText(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async waitForPageLoad(delay: number = 3000){
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(delay);
  }

  async removeIFrameChatIcon(){
    await this.page.evaluate(() => {
    const iframe = document.querySelector('#fc_widget'); // or any other unique identifier
    if (iframe instanceof HTMLElement) {
      iframe.style.display = 'none';  // Or use: iframe.style.visibility = 'hidden';
      }
    });
  }

  async hideElements(selectors: string[]=['#fc_widget','.b-top-but']) {
    await this.page.evaluate((sels) => {
      sels.forEach(sel => {
        const ele = document.querySelector(sel);
        if (ele instanceof HTMLElement) {
          ele.style.visibility = 'hidden'; // hides but keeps layout
        }
      });
    }, selectors);
  }
}
