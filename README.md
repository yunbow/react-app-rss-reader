# RSS Reader (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたRSSリーダーアプリケーションです。

## デモプレイ
https://yunbow.github.io/react-app-rss-reader/demo/

## 主要機能

### 記事表示
- 全フィードの最新記事を統合表示
- 記事の時系列ソート（新しい順）
- 記事のタイトル・説明・公開日時表示
- 外部リンクへの遷移

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/     # ボタンコンポーネント
│   │   ├── Input/      # 入力フィールド
│   │   └── Text/       # テキスト表示
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── AddFeedForm/    # フィード追加フォーム
│   │   ├── ArticleItem/    # 記事項目
│   │   └── FeedItem/       # フィード項目
│   └── organisms/      # 画面領域コンポーネント
│       └── RSSReader/      # RSSリーダー全体
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── utils/              # 共通処理
├── Config.ts           # 設定値
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン（追加・削除）
- `Input` - URL入力フィールド
- `Text` - テキスト表示（タイトル・説明・エラーなど）

### Molecules（機能単位）
- `AddFeedForm` - フィード追加フォーム
- `FeedItem` - 個別フィード項目
- `ArticleItem` - 個別記事項目

### Organisms（画面領域）
- `RSSReader` - アプリケーション全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## 使用方法

1. RSS フィードのURLを入力フィールドに入力
2. 「追加」ボタンをクリックしてフィードを登録
3. 登録されたフィードから自動的に記事を取得・表示
4. 不要なフィードは「削除」ボタンで削除可能

## 対応フォーマット

- RSS 2.0
- Atom 1.0

## 注意事項

- CORS制限により、プロキシサービス（AllOrigins）を使用してフィードを取得
- フィード情報はブラウザのlocalStorageに保存
- インターネット接続が必要

## ライセンス

MIT License