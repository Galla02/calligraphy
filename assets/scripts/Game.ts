import { _decorator, Component, Node,Label,Animation,Toggle,Button,Sprite,Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {

    @property({type:Toggle})
    private Atoggle:Toggle = null;

    @property({type:Toggle})
    private Btoggle:Toggle = null;

    @property({type:Toggle})
    private Ctoggle:Toggle = null;

    @property({type:Node})
    private calliNode:Node=null;

    @property({type:Node})
    private loseNode:Node=null;

    @property ({type:Node})
    private allNode:Node=null;

    @property({type:Label})
    private hintLabel:Label=null;

    @property({type:Label})
    private ALabel:Label=null;

    @property({type:Label})
    private BLabel:Label=null;

    @property({type:Label})
    private CLabel:Label=null;

    @property(Animation)
    BodyAnim2:Animation = null;

    @property(Animation)
    BodyAnim3:Animation = null;

    @property(Animation)
    BodyAnim4:Animation = null;

    @property(Animation)
    BodyAnim5:Animation = null;

    @property({type:Button})
    private Submit:Button=null;

    @property({type:Sprite})
    private SubmitSprite:Sprite=null;

    private ans=0;//是否已经提交过
    private peRes2=-1;
    private choice2='';

    onToggleClicked(toggle:Toggle,CustomEventData) {
       
       if(CustomEventData==1&&this.ans==0)
       {
            this.Submit.interactable=true;
            this.SubmitSprite.color = new Color(255, 255, 255); 
            this.show(1);
            this.choice2='A';
            this.ALabel.color = Color.WHITE;
            this.BLabel.color = Color.BLACK;
            this.CLabel.color = Color.BLACK;
       }
       else if(CustomEventData==2&&this.ans==0)
       {
            this.Submit.interactable=true;
            this.SubmitSprite.color = new Color(255, 255, 255); 
            this.show(2);
            this.choice2='B';
            this.BLabel.color = Color.WHITE;
            this.ALabel.color = Color.BLACK;
            this.CLabel.color = Color.BLACK;
       }
       else if(CustomEventData==3&&this.ans==0)
       {
            this.Submit.interactable=true;
            this.SubmitSprite.color = new Color(255, 255, 255); 
            this.show(3);
            this.choice2='C';
            this.CLabel.color = Color.WHITE;
            this.BLabel.color = Color.BLACK;
            this.ALabel.color = Color.BLACK;
       }
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
        this.Submit.interactable=false;
        this.SubmitSprite.color = new Color(128, 128, 128); // RGB for gray
        this.ALabel.color = Color.BLACK;
        this.ALabel.color = Color.BLACK;
        this.ALabel.color = Color.BLACK;
    }

    update(deltaTime: number) {
        
    }
}


