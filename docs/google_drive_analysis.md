# Google Drive分析レポート

作成日: 2026-06-11

## 分析範囲

Google DriveのMy Drive直下、フォルダ一覧、優先キーワード検索を確認した。

優先検索:

- 台本
- テンプレ
- カルテ
- ヒアリング
- ワンページメモ
- 分析
- シート
- レポート

## 現在の構造理解

現状のDriveは、明確なフォルダ階層よりも、My Drive直下に業務ファイルが多く置かれている状態。

主なファイル群:

1. 制作・運用テンプレート
   - 台本テンプレ
   - 企画シート
   - 運用フォーマット
   - アカウント設計チェックリスト
   - ワンページメモ

2. クライアント別案件資料
   - A-LIGHT / エーライツ
   - dTosh
   - Dr.トレーニング
   - R-body
   - スシタメ
   - せらもちゅ
   - モンスター研修

3. 分析・戦略資料
   - プロジェクト管理シート
   - 運用フォーマット
   - トレプロ系のヒアリング、KPI、ロードマップ資料
   - 競合調査、採用調査、SNS運用調査

4. ナレッジ・原理原則
   - マーケティングの原理原則
   - ブランディングの原理原則
   - コンセプトの教科書
   - 人気の方程式
   - 差別化コンテンツ フレームワーク
   - 戦略的ヒアリング完全マニュアル

5. 素材・納品・PDF
   - 制作フローPDF/PNG
   - 提案資料PDF
   - プロフィールレポートPDF
   - 画像素材
   - 完成動画フォルダ

## 1. 不要ファイル候補

削除ではなく、まず「Archive候補」または「要確認」にするのが安全。

| 判定 | ファイル | 理由 | 推奨アクション |
| --- | --- | --- | --- |
| 高 | 無題のプレゼンテーション | 2026-06-11作成、タイトル未設定、用途不明 | 中身確認後、不要なら削除 |
| 高 | `_____________________` | タイトルが意味を持たず、AI検索・人間検索の両方で不利 | 正式名称へリネーム。不要ならArchive |
| 高 | `_____________________.csv` | 同名スプレッドシートのCSV書き出し残りの可能性 | 元シート確認後、不要なら削除 |
| 中 | `creativeペルソナ.csv` | `creativeペルソナ` のCSV変換残りの可能性 | 元シートがあれば削除候補 |
| 中 | `運用フォーマット.csv` | `運用フォーマット` のCSV変換残りの可能性 | Google Sheets版を正本にし、CSVはArchive |
| 中 | `S__10117129_0.jpg` / `S__10117131_0.jpg` / `S__10117132_0.jpg` | タイトルから内容が判断できない画像素材 | 案件名・用途へリネーム、不要ならArchive |
| 中 | `140120230210506671.pdf` / `140120201217436277.pdf` | タイトルだけでは用途不明 | 内容確認し、資料価値が低ければArchive |
| 低 | 外部テンプレ系PPTX | `白 モノトーン...会社説明...pptx` など、Canva/テンプレ由来の可能性 | 使用実績がなければArchive |

## 2. 重複ファイル候補

### 明確な重複・派生

| グループ | ファイル | 判定 |
| --- | --- | --- |
| 運用フォーマット | `運用フォーマット` / `運用フォーマット.csv` | Google Sheets版を正本、CSVは書き出し残り候補 |
| creativeペルソナ | `creativeペルソナ` / `creativeペルソナ.csv` | Google Sheets版を正本、CSVは書き出し残り候補 |
| 無名シート | `_____________________` / `_____________________.csv` | 同一内容の可能性が高い |
| 制作フロー | `エーライツ様 制作フロー.pdf` / `エーライツ様 制作フロー.png` | PDFとPNGの形式違い。PDFを正本、PNGは共有用なら残す |

### テンプレと案件コピーの混在

| グループ | ファイル | 判定 |
| --- | --- | --- |
| 企画シート旧型 | `企画シート（テンプレ）` / `A-LIGHT様 企画シート（テンプレ）` / `【ウタさん 企画シート】` / `かけるさん 企画シート` / `ヒスイさん 企画シート` / `ストーリーテリング 検証` | 同じ列構造のコピーが多い。テンプレ正本と案件コピーを分離すべき |
| 企画シート新型 | `ショート動画企画シート_テンプレートv3.xlsx` / `エーライツ様 企画シート` | 新型テンプレと案件コピー。v3を正本候補にする |
| 台本 | `台本テンプレ` / `台本テンプレ【アデグル】` | 汎用テンプレと案件特化版。重複ではなく親子関係で管理 |
| ワンページメモ | `【ワンページメモ】テンプレ` / `【ワンページメモ】参考型` / `【ワンページメモ】A-LIGHT様` / `内製化プラン（ワンページメモ）` | テンプレ、参考、案件別実例が混在。整理すると提案自動化に使いやすい |

## 3. テンプレート候補

### 最優先テンプレート

| 優先 | ファイル | 用途 | AI活用 |
| --- | --- | --- | --- |
| 高 | 台本テンプレ | ショート動画台本の標準型 | 企画DBから台本自動生成 |
| 高 | ショート動画企画シート_テンプレートv3.xlsx | 企画、担当、期日、ステータス管理 | 制作進行DBの元型 |
| 高 | 運用フォーマット | アカウント設計、3C、チェックリスト、台本チェック | SNS運用診断の標準チェック |
| 高 | 【ワンページメモ】テンプレ | 提案前の論点整理 | 提案資料ドラフト生成 |
| 高 | 戦略的ヒアリング完全マニュアル | クライアントヒアリング、カルテ作成 | クライアントカルテ自動生成 |

### 追加テンプレート候補

| 優先 | ファイル | 用途 |
| --- | --- | --- |
| 中 | アカウント設計 チェックリスト | アカウント初期診断 |
| 中 | 差別化コンテンツ フレームワーク | SNS設計・差別化設計 |
| 中 | dTosh様 YouTubeコンテンツカレンダー | YouTube長尺/ショート運用管理 |
| 中 | Dr.トレーニング様 香盤表 | 撮影当日の香盤表・インタビュー設計 |
| 中 | セラピー プロフィールレポート.pdf | タレント/人物カルテの完成例 |
| 中 | A-LIGHT様 企画シート（テンプレ） | 採用SNS向け企画シートの完成例 |

## 4. AIが読むべき重要ファイル

AIの常時参照対象として、以下を優先する。

### P1: すぐAIに読ませるべき

| ファイル | URL | 理由 |
| --- | --- | --- |
| 台本テンプレ | https://docs.google.com/document/d/1tbY24KMOCReD7MDBejQSV_GA9UIbotayGhdDcO-z9Js | 台本自動生成の標準型 |
| 台本テンプレ【アデグル】 | https://docs.google.com/document/d/1q5mKiLvwV4VdBQJmJdK6-8OJVwgWQU4WWQDAbe8jbZg | 実案件入りの台本運用例 |
| 運用フォーマット | https://docs.google.com/spreadsheets/d/1aJklUjJHUQVDrc-rJvMpxo5uz8UAE47zNyYpf2AMvMI | SNS運用・分析・台本チェックの中核 |
| ショート動画企画シート_テンプレートv3.xlsx | https://drive.google.com/file/d/14I27qW0s3P3Ufp8V6j_TvzmeBfmPaw2m | 企画進行の新型テンプレ候補 |
| 戦略的ヒアリング完全マニュアル | https://docs.google.com/document/d/1WzmQz6NoXztxpMPRhyGDFq5ILW69zIxkHJr6xfYEoJw | クライアントカルテ生成の土台 |
| 【ワンページメモ】テンプレ | https://docs.google.com/document/d/1_TFdgMBGAVXDVitT7K4pWoaKhxgSFzC_agr7Sw9IEjY | 提案書前の構造化テンプレ |
| プロジェクト管理シート | https://docs.google.com/spreadsheets/d/1jlC4la8Nz_aBidYzKEMuhNlIEAbkMjG5edXy3sIYph0 | 価格・粗利・習慣・プロジェクト管理の混在。経営KPI化候補 |

### P2: 案件理解・提案品質向上に読む

| ファイル | URL | 理由 |
| --- | --- | --- |
| A-LIGHT様 企画シート（テンプレ） | https://docs.google.com/spreadsheets/d/1cntlQNacC2rQMMUNwBHxy_PSCrXgFESnDiDtDBaJNrk | 採用SNSの企画・目的・意図が豊富 |
| エーライツ様 企画シート | https://docs.google.com/spreadsheets/d/1RwwUCWsygqvmvYPq2y5mYH7Gb7-eSupJtIkMgANiGJE | 新型フォーマットの案件コピー |
| A-LIGHT様 ヒアリングシート | https://docs.google.com/document/d/13lR2Eygmk14oFpEzaHQjEBLeUhm16FQQSTv1Xn7Tduo | クライアントカルテ化候補 |
| セラピー プロフィールレポート.pdf | https://drive.google.com/file/d/1c8koMQWVHOmgFM4wtj8xyZW2dHvBDTMK | 人物カルテ、SNS戦略、インサイト抽出の良い実例 |
| dTosh様 YouTubeコンテンツカレンダー | https://docs.google.com/spreadsheets/d/1B_6O_HUpRY6z7gcNZsO5XevLroNuA7gQ_5NTjAriLVE | YouTube運用・進行・月次本数管理に使える |
| Dr.トレーニング様 香盤表 | https://docs.google.com/spreadsheets/d/1Clwifm2Wqssrco7nKUMJ1_wfnOUj_BVSEi4nzw9XRp4 | 撮影指示書・香盤表テンプレ化候補 |

### P3: ナレッジ資産として読む

| ファイル | URL | 理由 |
| --- | --- | --- |
| 差別化コンテンツ フレームワーク | https://docs.google.com/document/d/173N21bfBIzCkrhUC1vyY2vMry4P54woSjNuYYA9SSlw | アカウント設計思想 |
| マーケティングの原理原則 | https://docs.google.com/document/d/1DR822f-XKeJb1eFDatYs8-99jTT-TNDF4Wo0MyBO-Mc | 提案・企画の基礎思想 |
| ブランディングの原理原則 | https://docs.google.com/document/d/1RzQD3HW34q-HGM2STZmMNJkehIaAXNzEtUiIqsrSgSs | ブランド設計 |
| コンセプトの教科書 | https://docs.google.com/document/d/1oinLEVdph7oAdPUCl3-oAOieVF2skOk6Ivp1Z72m5T0 | コンセプト設計 |
| 人気の方程式 | https://docs.google.com/document/d/1l7vz3E-YGa-seNKiNxBtDlHMFrB3l2REe6xTw8kYB6w | 伸びる企画の思想 |

## 優先テーマ別まとめ

### 台本テンプレ

現状:

- 汎用の `台本テンプレ` がある。
- `台本テンプレ【アデグル】` は実案件入りで、型と事例が混在している。
- `夢ちゃん アフレコ生成GPT` は台本生成プロンプトとして強いが、特定アカウント依存がある。

推奨:

- `台本テンプレ` を正本にする。
- `台本テンプレ【アデグル】` は事例集へ移す。
- `夢ちゃん アフレコ生成GPT` は「プロンプトライブラリ」に入れる。
- PN OS上では「台本DB」のテンプレートとして、以下の構造を標準化する。
  - タイトル
  - シリーズ名
  - 冒頭フック
  - 主張
  - 構成
  - CTA
  - テロップ案
  - 撮影メモ
  - 編集メモ

### クライアントカルテ

現状:

- 明示的な「クライアントカルテ」という名前のファイルは見つからなかった。
- 近いものは以下。
  - `戦略的ヒアリング完全マニュアル`
  - `A-LIGHT様 ヒアリングシート`
  - `【ワンページメモ】A-LIGHT様`
  - `セラピー プロフィールレポート.pdf`
  - 各PR戦略資料

推奨:

- 新しく「クライアントカルテ テンプレート」を作るべき。
- 既存のヒアリングシートとワンページメモを統合する。
- 標準項目は以下。
  - クライアント名
  - 事業概要
  - 商材
  - ターゲット
  - 現状KPI
  - 課題
  - 競合
  - 提案方針
  - 成功条件
  - 契約内容
  - 担当者
  - コミュニケーション手段
  - 関連Drive URL
  - 関連Notion URL

### 分析シート

現状:

- `運用フォーマット` がSNS運用診断・3C・台本チェックの中核。
- `プロジェクト管理シート` に価格、粗利、プラン設計の情報が混在。
- `dTosh様 YouTubeコンテンツカレンダー` は運用KPI・本数管理の実例。
- トレプロ系の分析シートには、ヒアリング、KPI、チャネル、商談、受注、ロードマップの設計が豊富。

推奨:

- 分析シートは「SNS分析」「案件収益分析」「営業/商談分析」に分ける。
- Google Sheetsの正本を決め、CSV書き出し残りはArchiveへ移す。
- AIが読む分析シートは、個別案件より先に以下を読む。
  - 運用フォーマット
  - プロジェクト管理シート
  - dTosh様 YouTubeコンテンツカレンダー
  - トレプロ系ヒアリング/KPI資料

## 推奨フォルダ設計

Drive直下の整理案:

```text
00_PN_OS_Read_First
01_Templates
  01_Script
  02_Client_Carte
  03_Analysis
  04_Proposal
  05_Shooting
02_Clients
  A-LIGHT
  dTosh
  Dr_Training
  R-body
  Monster_Training
03_Knowledge
  Marketing
  Branding
  Concept
  Storytelling
04_Reports
05_Archives
99_Inbox_Unsorted
```

## 次にやるべきこと

1. `00_PN_OS_Read_First` を作り、AIが読むべきP1ファイルのリンク集を置く。
2. `01_Templates` に正本テンプレートを集約する。
3. CSV書き出し残り、無題ファイル、意味不明タイトルをArchive候補へ分ける。
4. 「クライアントカルテ テンプレート」を新規作成する。
5. `台本テンプレ`、`運用フォーマット`、`ワンページメモ`、`戦略的ヒアリング完全マニュアル` をPN OSの標準入力にする。
6. 各クライアントフォルダに以下を必ず置くルールを作る。
   - クライアントカルテ
   - 企画シート
   - 台本
   - 撮影指示書
   - 分析シート
   - 月次レポート

