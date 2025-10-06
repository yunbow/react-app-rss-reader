# RSSリーダー (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたRSSリーダーアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-rss-reader/demo/

## 主要機能

### RSS/Atomフィード管理
- フィードの追加・削除
- RSS 2.0とAtom 1.0フォーマットに対応
- データの永続化（localStorage）
- CORS制限対応（AllOriginsプロキシ使用）

### 記事表示
- 全フィードの最新記事を統合表示
- 記事の時系列ソート（新しい順）
- 記事のタイトル・説明・公開日時表示
- 外部リンクへの遷移
- フィード別の記事表示

### 操作方法
- **フィード追加**: URL入力フィールドにRSS/AtomフィードのURLを入力して追加ボタン
- **フィード削除**: 各フィードの削除ボタンで登録解除
- **記事閲覧**: 記事タイトルをクリックして外部リンクへ遷移

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── rss-reader/             # RSSリーダー機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── AddFeedForm/    # フィード追加フォーム
│       │   ├── FeedItem/       # フィード項目
│       │   └── ArticleItem/    # 記事項目
│       ├── RSSReaderApp/       # 機能ルートコンポーネント
│       ├── useRSSReader.ts     # RSS管理フック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   ├── Input/                  # テキスト入力
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── utils/                      # ユーティリティ関数
├── Config.ts                   # 設定値
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

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

## ライセンス

MIT License
