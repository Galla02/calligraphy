import { _decorator, Component, Node,Label,Animation,Toggle,Button,Sprite,Color } from 'cc';
import { COCOSPLAY } from 'cc/env';
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

    @property({type:Label})
    private ALabel:Label=null;

    @property({type:Label})
    private BLabel:Label=null;

    @property({type:Label})
    private CLabel:Label=null;

    @property({type:Label})
    private DLabel:Label=null;

    @property(Animation)
    BodyAnim2:Animation = null;

    @property(Animation)
    BodyAnim3:Animation = null;

    @property(Animation)
    BodyAnim4:Animation = null;

    @property(Animation)
    BodyAnim5:Animation = null;

    @property(Animation)
    BodyAnim6:Animation = null;

    @property(Animation)
    BodyAnim7:Animation = null;

    @property({type:Button})
    private Submit:Button=null;

    @property({type:Sprite})
    private SubmitSprite:Sprite=null;

    private ans=0;//是否已经提交过
    private peRes2=-1;
    private choice2='';
    private pre=-1;
    //private clickTimes=0;
    private sumPre1=0;
    private sumPre2=0;
    private sumPre3=0;
    private sumPre4=0;
    onToggleClicked(toggle:Toggle,CustomEventData) {
       if(CustomEventData==1&&this.ans==0)
       {
            console.log(this.sumPre1);
            if(this.pre==1&&this.sumPre1%2==0)
            {
                this.sumPre1++;
                this.pre=1;
                this.choice2='';
                this.Submit.interactable=false;
                this.SubmitSprite.color = new Color(128, 128, 128); // RGB for gray
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
                this.ALabel.color=Color.BLACK;
            }
            else if((this.pre==1&&this.sumPre1%2==1)||(this.pre!=1))
            {
                this.sumPre1=0;
                this.pre=1;
                this.Submit.interactable=true;
                this.SubmitSprite.color = new Color(83, 15, 15); 
                this.show(1);
                this.choice2='A';
                this.ALabel.color = Color.WHITE;
                this.BLabel.color = Color.BLACK;
                this.CLabel.color = Color.BLACK;
                this.DLabel.color = Color.BLACK;
            }
            
       }
       else if(CustomEventData==2&&this.ans==0)
       {
            
            if(this.pre==2&&this.sumPre2%2==0)
            {
                this.sumPre2++;
                this.pre=2;
                this.choice2='';
                this.Submit.interactable=false;
                this.SubmitSprite.color = new Color(128, 128, 128); // RGB for gray
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
                this.BLabel.color=Color.BLACK;
            }
            else if((this.pre==2&&this.sumPre2%2==1)||(this.pre!=2))
            {
                this.sumPre2=0;
                this.pre=2;
                this.Submit.interactable=true;
                this.SubmitSprite.color = new Color(83, 15, 15); 
                this.show(2);
                this.choice2='B';
                this.BLabel.color = Color.WHITE;
                this.ALabel.color = Color.BLACK;
                this.CLabel.color = Color.BLACK;
                this.DLabel.color = Color.BLACK;
            }
            
       }
       else if(CustomEventData==3&&this.ans==0)
       {
            if(this.pre==3&&this.sumPre3%2==0)
            {
                this.sumPre3++;
                this.pre=3;
                this.choice2='';
                this.Submit.interactable=false;
                this.SubmitSprite.color = new Color(128, 128, 128); // RGB for gray
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
                this.CLabel.color=Color.BLACK;
            }
            else if((this.pre==3&&this.sumPre3%2==1)||(this.pre!=3))
            {
                this.sumPre3=0;
                this.pre=3;
                this.Submit.interactable=true;
                this.SubmitSprite.color = new Color(83, 15, 15); 
                this.show(3);
                this.choice2='C';
                this.CLabel.color = Color.WHITE;
                this.BLabel.color = Color.BLACK;
                this.ALabel.color = Color.BLACK;
                this.DLabel.color = Color.BLACK;
            }
            
       }
       else if(CustomEventData==4&&this.ans==0)
       {
            if(this.pre==4&&this.sumPre4%2==0)
            {
                this.sumPre4++;
                this.pre=4;
                this.choice2='';
                this.Submit.interactable=false;
                this.SubmitSprite.color = new Color(128, 128, 128); // RGB for gray
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
                this.CLabel.color=Color.BLACK;
            }
            else if((this.pre==4&&this.sumPre4%2==1)||(this.pre!=4))
            {
                this.sumPre4=0;
                this.pre=4;
                this.Submit.interactable=true;
                this.SubmitSprite.color = new Color(83, 15, 15); 
                this.show(4);
                this.choice2='D';
                this.DLabel.color = Color.WHITE;
                this.BLabel.color = Color.BLACK;
                this.ALabel.color = Color.BLACK;
                this.CLabel.color = Color.BLACK;
            }
            
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
                else if(show2==4)
                {
                    if(childNode.name=='6'||childNode.name=='7')
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
            else if((this.choice2=='B'||this.choice2=='C'||this.choice2=='D')&&this.ans==0)
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
                else if(this.choice2=='D')
                {
                    this.BodyAnim6.play('loseAnimate6');
                    this.BodyAnim7.play('loseAnimate7');
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
        this.BLabel.color = Color.BLACK;
        this.CLabel.color = Color.BLACK;
        this.DLabel.color = Color.BLACK;
    }
    update(deltaTime: number) {
        
    }
}


