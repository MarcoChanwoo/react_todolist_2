import { useState, useCallback } from 'react';
import { MdFlightTakeoff } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue(''); // value 값 초기화
            // submit 이벤트는 브라우저에서 새로고침을 발생시키므로
            // 이를 방지하기 위해 아래 함수를 호출함
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdFlightTakeoff />
            </button>
        </form>
    );
};

export default TodoInsert;
