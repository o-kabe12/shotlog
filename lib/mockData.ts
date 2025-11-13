import { Item } from "./type";

export const MOCK_DATA: Item[] = [
  {
    id: '1',
    image: '/gallery/image_001.jpg',
    text: 'これはテストです。',
    tags: ['テスト', 'テスト2'],
    createdAt: '2025-11-04',
  },
  {
    id: '2',
    image: '/gallery/image_002.jpg',
    text: '旅行に行ってきました',
    tags: ['テスト', '旅行'],
    createdAt: '2025-11-04',
  },
  {
    id: '3',
    image: '/gallery/image_001.jpg',
    text: 'この日はお気に入りのカフェに行った',
    tags: ['テスト', 'カフェ'],
    createdAt: '2025-11-01',
  },
  {
    id: '4',
    image: '/gallery/image_002.jpg',
    text: '何もない',
    tags: [],
    createdAt: '2025-10-01',
  },
  {
    id: '5',
    image: '/gallery/image_001.jpg',
    text: 'テストです',
    tags: ['テスト'],
    createdAt: '2024-11-01',
  },
]