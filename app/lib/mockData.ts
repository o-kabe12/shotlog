import { Item } from "./type";

export const MOCK_TASKS: Item[] = [
  {
    id: '1',
    image: 'https://picsum.photos/800',
    text: 'これはテストです。',
    tags: ['テスト', 'テスト2'],
    createdAt: '2025-11-04',
  },
  {
    id: '2',
    image: 'https://picsum.photos/800',
    text: '旅行に行ってきました',
    tags: ['テスト', '旅行'],
    createdAt: '2025-11-04',
  },
  {
    id: '3',
    image: 'https://picsum.photos/800',
    text: 'この日はお気に入りのカフェに行った',
    tags: ['テスト', 'カフェ'],
    createdAt: '2025-11-01',
  },
  {
    id: '4',
    image: 'https://picsum.photos/800',
    text: '何もない',
    tags: [],
    createdAt: '2025-10-01',
  },
  {
    id: '5',
    image: 'https://picsum.photos/800',
    text: 'テストです',
    tags: ['テスト'],
    createdAt: '2024-11-01',
  },
]