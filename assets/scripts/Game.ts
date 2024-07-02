import { _decorator, Component, Node,Label,Animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    @property({type:Node})
    private calliNode:Node=null;

    @property({type:Node})
    private loseNode:Node=null;

    @property ({type:Node})
    private allNode:Node=null;

    @property({type:Label})
    private hintLabel:Label=null;

    @property(Animation)
    BodyAnim2:Animation = null;

    @property(Animation)
    BodyAnim3:Animation = null;

    @property(Animation)
    BodyAnim4:Animation = null;

    @property(Animation)
    BodyAnim5:Animation = null;

    private ans=0;//是否已经提交过
    private peRes2=-1;
    private choice2='';
    //按钮响应函数
    choice(event,CustomEventData){
        let pkRes=-1; //0为选错,1为选对
        let show2=0;
        let choiceTarget=event.target.name;//获取目标节点的name

        if(choiceTarget=='A'&&this.ans==0)
        {
            this.choice2='A';
            show2=1;
            this.show(show2);
            pkRes=1;
            this.peRes2=1;
        }
        else if (choiceTarget=='B'&&this.ans==0){
            this.choice2='B';
            show2=2;
            this.show(show2);
            pkRes=0;
            this.peRes2=0;
        }
        else if(choiceTarget=='C'&&this.ans==0){
            this.choice2='C';
            show2=3;
            this.show(show2);
            pkRes=0;
            this.peRes2=0;
        }
        console.log(pkRes);
    }

    show(show2)
    {
        let children=this.calliNode.children;
            children.forEach(childNode => {
               if(show2==1)
               {
                    if(childNode.name=='0'||childNode.name=='1')
                    {
                        childNode.active=true;
                    }
                    else {
                        childNode.active=false;
                    }
               } 
               else if(show2==2)
               {
                    if(childNode.name=='2'||childNode.name=='3')
                    {
                        childNode.active=true;
                    }
                    else {
                        childNode.active=false;
                    }
                   
                }
                else if(show2==3)
               {
                    if(childNode.name=='4'||childNode.name=='5')
                    {
                        childNode.active=true;
                    }
                    else {
                        childNode.active=false;
                    }
                    
                }
            });
    }

    submit(event,CustomEventData){
        // console.log('submit');
        if(event.target.name='submit')
        {
            console.log(this.choice2);
            console.log('submit');
            console.log(this.ans);
            //this.ans++;
            if(this.choice2=='A'&&this.ans==0)
            {
                console.log('A2');
                this.hintLabel.string='恭喜你选择正确！';
            }
            else if(this.choice2=='B'&&this.ans==0)
            {
                this.hintLabel.string='选择错误！'
                let childLose=this.loseNode.children;
                    childLose.forEach(childNode=>{
                    if(childNode.name=='lose')
                    {
                        childNode.active=true;
                    }
                    });
            }
            else if(this.choice2=='C'&&this.ans==0)
            {
                this.hintLabel.string='选择错误！'
                let childLose=this.loseNode.children;
                    childLose.forEach(childNode=>{
                    if(childNode.name=='lose')
                    {
                        childNode.active=true;
                    }
                    });
            }
            this.ans++;
        }
    }

    //按钮响应函数
    LosePlay(event,CustomEventData){
        if(event.target.name='lose')
        {
            let childLose=this.loseNode.children;
            childLose.forEach(childNode=>{
                if(childNode.name=='lose')
                {
                    childNode.active=false;
                }
            });
            if(this.choice2=='B')
                {
                    this.BodyAnim2.play('loseAnimate2');
                    this.BodyAnim3.play('loseAnimate3');
                }

                else if(this.choice2=='C')
                {
                    this.BodyAnim4.play('loseAnimate4');
                    this.BodyAnim5.play('loseAnimate5');
                }
        }
    }

    start() {
        let children=this.allNode.children;
        children.forEach(childNode=>{
            if(childNode.name=='4'||childNode.name=='5')
            {
                childNode.active=false;
            }
            else{
                childNode.active=true;
            }
        });

        let child=this.calliNode.children;
        child.forEach(element => {
            element.active=false;
        });
        let childLose=this.loseNode.children;
        childLose.forEach(childNode=>{
            if(childNode.name=='lose')
            {
                childNode.active=false;
            }
        });
        //childLose.active=false;
    }

    update(deltaTime: number) {
        
    }
}


