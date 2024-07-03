import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('home')
export class home extends Component {

    clickToGame1(CustomEventData)
    {
        director.loadScene('game');
    }

    start() {
        // 预加载 "Game" 场景
        director.preloadScene('game', (err) => {
            if (err) {
                console.error('Failed to preload scene:', err);
            } else {
                console.log('Game scene preloaded successfully');
            }
        });
    }

    update(deltaTime: number) {
        
    }
}


