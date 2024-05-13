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
    },
    render (h) {
        // const { obj, dataList } = this
        // console.log(this.dataList, 'this.datalist')
        // console.log(this.obj, 'this.obj')
        return (
            <div>
                <p style={{ color: "red", }} class={'ap'}>sw</p>
                <span class={'button'} onClick={($event) => this.onHandleClick($event, this.obj)}>{this.obj.msg}</span>
                <ulCom personList={this.obj.datalist}></ulCom>
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