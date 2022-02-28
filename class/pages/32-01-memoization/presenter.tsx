import { memo } from 'react'


 function MemoizationPresenterPage(){
    console.log("Presenter Rendering")

    return(
        <div>
            <div>-=-=-=-=-==-=-=-=-=-=-=-=--=-=-=-=--=</div>
            <h1>MemoizationPresenterPage</h1>
        </div>
    )
}
export default memo(MemoizationPresenterPage)