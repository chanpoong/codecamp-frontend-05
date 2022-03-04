import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import JestUnitTestSnapshotPage from '../../pages/34-03-jest-unit-test-snapshot';



it('컴포넌트가 기존이랑 바뀐게 없는지 비교하는 테스트-스냅샷 테스트', ()=> {
    const result=render(<JestUnitTestSnapshotPage />);
    expect(result.container).toMatchSnapshot();
});