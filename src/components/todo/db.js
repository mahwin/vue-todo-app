import { getCurrentTimeStamp } from "../../utils/date";

const 천 = 1000;
const 십만 = 천 * 천;

export const TODO_LIST_INFOS = [
  {
    id: 0,
    title: "숙제하기",
    description: "뷰 공부하기",
    isDone: false,
    created_at: getCurrentTimeStamp() - 십만 * 5,
    finished_at: null,
  },
  {
    id: 1,
    title: "운동하기",
    description: "헬스장 가기",
    isDone: false,
    created_at: getCurrentTimeStamp() - 십만 * 7,
    finished_at: null,
  },
  {
    id: 2,
    title: "책 읽기",
    description: "뷰 관련 책 읽기",
    isDone: true,
    created_at: getCurrentTimeStamp() - 십만 * 8,
    finished_at: getCurrentTimeStamp() - 십만 * 4,
  },
  {
    id: 3,
    title: "코딩하기",
    description: "프로젝트 진행하기",
    isDone: true,
    created_at: getCurrentTimeStamp() - 십만 * 5,
    finished_at: getCurrentTimeStamp() - 십만 * 3,
  },
];
