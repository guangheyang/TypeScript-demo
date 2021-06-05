
/** 
 * 开发一个字典类，字典中会保存键值对的数据
 * 
 * 键值对的特点：
 * - 键（key）可以是任何类型，但不允许重复
 * - 值（value）可以是任何类型
 * 每个键对应一个值
 * 所有的键类型相同，所有的值类型相同
 * 
 * 字典类中键值对数据的操作：
 * - 按照键，删除对应的键值对
 * - 循环每个键值对
 * - 得到当前键值对的数量
 * - 重新设置某个键值对的值，如果不存在就添加
*/
export class Dictionary<K, V> {
    private keys: K[] = [];
    private value: V[] = [];

    set(key: K, value: V) {
       const i = this.getIndex(key);
       if (i < 0) {
         this.keys.push(key);
         this.value.push(value);
       } else {
         this.value[i] = value;
       }
    }

    forEach(callback: CallBack<K, V>) {
        this.keys.forEach((k, i) => {
            const v = this.value[i];
            callback(k, v);
        })
    }
    hasKey(key: K) {
        return this.keys.includes(key);
    }
    delete(key: K) {
        const i = this.getIndex(key);
        if (i === -1) return;
        this.keys.splice(i, 1);
        this.value.splice(i, 1);
    }
    get length() {
        return this.keys.length;
    }
    private getIndex(key: K) {
        return this.keys.indexOf(key);
    }
}

export type CallBack<T, U> = (k: T, v: U) => void;