import React from 'react';

interface CommentInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ value, onChange, onSubmit }) => {
    return (
        <div className="replyInput">
      <textarea
          placeholder="댓글 추가"
          value={value}
          onChange={onChange}
      ></textarea>
            <div>
                <span>취소</span>
                <span onClick={onSubmit} className={value}>등록</span>
            </div>
        </div>
    );
};

export default CommentInput;
