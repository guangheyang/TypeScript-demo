export class Tank {
    x: number = 0
    y: number = 0
    protected name: string = '坦克'
    shoot() {
        console.log('发射子弹')
    }
    // 自身调用受保护的属性
    sayHello() {
        console.log(`我是一个${this.name}`)
    }
}

export class PlayerTank extends Tank {
    x: number = 20
    y: number = 20
    protected name: string = '玩家坦克'
    shoot() {
        console.log('玩家发射子弹')
    }
    left: number = 5
     // 子类调用受保护的属性
     test() {
        // console.log(this.name)
        super.sayHello()
        // this.sayHello() 也可以
    }
}

export class EnemyTank extends Tank {
    name: string = '敌方坦克'
    health: number = 1
}

export class BossTank extends EnemyTank {
    health: number = 3
}

const p: Tank = new PlayerTank()
console.log(p.x, p.y)
p.shoot()
p.sayHello()
// 判断具体类型
if (p instanceof PlayerTank) {
    console.log(p.left)
}