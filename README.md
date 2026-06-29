# TaskFlow 網站 / 隱私政策

這個資料夾包含 TaskFlow 的簡單靜態網站，包含：

- `index.html`：App 介紹頁（功能、特色、如何使用）
- `privacy.html`：完整隱私權政策（繁體中文）

## 為什麼需要這個網站？

Apple App Store 上架時**必須**提供公開可存取的 **Privacy Policy URL**。

這個網站同時可以：
- 作為隱私政策頁面
- 簡單介紹 App（可放在 App Store Connect 的 Review Notes 給審核員看）

## 部署方式（推薦做法）

### 推薦：開一個獨立公開倉庫（最乾淨）

1. 在 GitHub 新開一個**公開**倉庫，例如：
   - `taskflow-site`
   - `taskflow-privacy`
   - `taskflow-docs`

2. 把 `site/` 裡面的所有檔案複製到新倉庫根目錄

3. 設定 GitHub Pages：
   - 去新倉庫 Settings → Pages
   - Source 選擇 `Deploy from a branch`
   - Branch 選 `main`，資料夾選 `/ (root)`
   - Save

4. 幾分鐘後你的網站就會在：
   ```
   https://你的GitHub帳號.github.io/taskflow-site/
   https://你的GitHub帳號.github.io/taskflow-site/privacy.html
   ```

5. 把隱私政策網址填到 App Store Connect：
   - App Store Connect → 你的 App → App Information → Privacy Policy URL

### 另一種做法（單一倉庫）

如果你想全部放在同一個倉庫：
- 把 `site/` 資料夾留在這裡
- 在 GitHub Pages 設定 Source 選 `Deploy from a branch` → `main` / `docs`（需要把檔案搬到 `docs/` 資料夾）
- 缺點：如果主倉庫是 Private，GitHub Pages 也會是 Private（無法給 Apple 審核員看）

**因此強烈建議開獨立公開倉庫。**

## 自訂項目

- 把 `privacy.html` 裡的 `your-email@example.com` 改成你的真實聯絡信箱
- 最後更新日期請記得更新
- 如果之後改用其他 AI 服務，要同步更新隱私政策

## 注意事項

- 隱私政策**必須公開**，不能放在需要登入才能看到的頁面
- 內容要誠實反映實際資料流向（本地儲存 + Gemini 第三方傳輸）
- 建議在 App 內的設定頁也放上這個隱私政策連結

---

有任何問題可以直接修改這些 HTML 檔案，或再告訴我需要調整哪一段內容。