// import styles from './style.scss'
import './style.scss'
import ulCom from './ulCom'
// const ulCom = {
//     name: 'ulCom',
//     props: ['personList'],
//     created () {
//         // console.log(this.personList, 'created')
//     },
//     render (h) {
//         console.log(this.personList, ' this.personList')
//         return (
//             <ul>
//                 {
//                     // this.personList.map((item,index) => {//这里不可以用for循环
//                     //     return (//要把循环出来的return出去
//                     //         <li class={'liTag'}>
//                     //             <p>{{index +1}}</p>
//                     //             <p>{{item.name}}</p>
//                     //         </li>
//                     //     )
//                     // })
//                 }
//             </ul>
//         )
//     }
// }

// 插槽
const slotAct = {//插槽内容
    render (h) {
        return (
            <div> 插槽的内容 </div>
        )
    }
}
const slotAct2 = {//插槽内容
    render (h) {
        return (
            <div>  </div>
        )
    }
}
export default {
    name: 'CustomJS',
    data () {
        return {
        }
    },
    props: {
        obj: {
            type: Object,
            required: true
        },
        dataList: {
            type: Array,
            required: true
        }
    },
    render (h) {
        const slotContent = {//插槽命名
            // header: (props) => <slotAct></slotAct>
            header: (props) => <strong>
                {props.userInfo.info}//子组件通过插槽传过来的参数
            </strong>
        }
        // console.log(this.dataList, 'dataList')
        // console.log(this.obj, 'obj')
        return (
            <div>
                <p style={{ color: "red", }} class={'ap'}>sw</p>
                <span class={'button'} onClick={($event) => this.onHandleClick($event, this.obj)}>{this.obj.msg}</span>
                <ulCom personList={this.dataList} scopedSlots={slotContent}></ulCom>

            </div>
        )

    },
    methods: {
        onHandleClick (e, data) {
            // console.log(e, data,)
            this.$emit('parentEvent', { data: 'children' })
        }
    },
}