import './style.scss'

const ulCom = {
    name: 'ulCom',
    props: ['personList'],
    render (h) {
        // console.log(this.personList, ' this.personList')
        return (
            <ul>
                {
                    this.personList.map((item, index) => {//这里不可以用for循环
                        return (//要把循环出来的return出去
                            <li class={'liTag'}>
                                <span>{index + 1}</span>
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default ulCom   //将功能模块抽离出来