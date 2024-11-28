import { fn } from '@storybook/test';
import Task from './Task';

export const ActionData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

export default {
  component: Task, // 컴포넌트 자체
  title: 'Task', //스토리북 사이드바에서 컴포넌트를 그룹화하거나 분류하는 방법
  tags: ['autodocs'], // 컴포넌트에 대한 문서를 자동으로 생성하기 위한 태그
  excludeStories: /.*Data$/, // 스토리에 필요하지만 스토리북에서 렌더링되지 않아야하는 추가 정보
  args: {
    // 컴포넌트가 사용자 정의 이벤트를 모킹하기 위해 기대하는 액션 args를 정의
    ...ActionData,
  },
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task ',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};
