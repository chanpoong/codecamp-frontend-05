import * as JH from './boardCommentList.styles'
import {BsPencil} from 'react-icons/bs'
import {MdDeleteOutline} from 'react-icons/md'
import { Rate } from 'antd';

export default function BoardCommentListPageUI(props){

    return (
        <>
            <JH.WrapperFooter>

                

                <JH.FooterMakeComment>
                    <JH.WrapperFooter__Header>v 댓글</JH.WrapperFooter__Header>
                    <JH.MakeCommentInfo>
                        <JH.CommentWriter onChange={props.onChangeCommentWriter} placeholder='작성자'/>
                        <JH.CommentWriter type='password' onChange={props.onChangeCommentPassword} placeholder='비밀번호'/>
                        <Rate 
                        onChange={props.onChangeCommentRating} 
                        
                        allowHalf defaultValue={1} maxLength={5}
                        />
                    </JH.MakeCommentInfo>
                    <JH.MakeCommentTxtBox>
                        <JH.CommentInput placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." 
                        onChange={props.onChangeCommentContents}
                        maxLength={100}                    >
                            
                        </JH.CommentInput>
                        <JH.CommentInput__>
                                <JH.TypingCutLine>{props.commentContents.length}/100</JH.TypingCutLine>
                                <JH.SubmitCommentBtn onClick={props.submitComment}>등록하기</JH.SubmitCommentBtn>
                        </JH.CommentInput__>
                    </JH.MakeCommentTxtBox>
                </JH.FooterMakeComment>

                <JH.FooterShowComment>
                    
                    {props.data?.fetchBoardComments.map((el, index) => (
                        <div key={el._id}>
                        <JH.CommentHeader>
                            <JH.ShowComment__header>
                                <JH.ShowComment__headerIcon>icon</JH.ShowComment__headerIcon>
                                <JH.ShowComment__headerWriter>{el.writer}</JH.ShowComment__headerWriter>
                                {/* <JH.ShowComment__headerRating>{el.rating}</JH.ShowComment__headerRating> */}
                                <Rate 
                                allowHalf value={el.rating}
                                disabled='true'
                                />
                            </JH.ShowComment__header>
                            
                            <JH.ShowComment__Button>
                                <BsPencil className="UpdateIcon" size='20' type="button" cursor='pointer'></BsPencil>
                                <MdDeleteOutline id={el._id} className="DeleteIcon" size='25'type="button" cursor='pointer' onClick={props.deleteComment}></MdDeleteOutline>
                            </JH.ShowComment__Button>
                        </JH.CommentHeader>
                        
                        
                        <JH.CommentBody>
                            <JH.CommentContent>{el.contents}</JH.CommentContent>
                            <JH.CommentCreatedAt>{el.createdAt}</JH.CommentCreatedAt>
                        </JH.CommentBody>
                        </div>
                    ))}
                    
                </JH.FooterShowComment>
            </JH.WrapperFooter>
        </>
    )
}