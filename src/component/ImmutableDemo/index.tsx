import React, { Component, PureComponent, memo } from 'react';

// function generateWords(oldWords: string[], newWord: string) {
//     return Object.assign({}, oldWords, { right: 'blue' });
// }

interface StudentType {
    name: string;
    age: number;
    sid: number;
}

interface StudentListState {
    studentList: StudentType[];
    time: number;
};

class StudentList extends Component<any, StudentListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            studentList: [{
                name: 'xialuo',
                age: 1,
                sid: Date.now()
            }],
            time: Date.now(),
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.setState((state, props) => ({
            studentList: [...state.studentList, {
                name: 'yuanhua',
                age: 21,
                sid: Date.now()
            }]
        }))
    }

    handleChange() {
        // 在oldState修改，setState
        this.setState((state, props) => {
            const newStateList = state.studentList;
            newStateList[0].age = 100;
            return {
                studentList: newStateList,
                time: Date.now()
            }
        })

        // 创建新数组 setState
        // this.setState((state, props) => {
        //     state.studentList.splice(0, 1);
        //     console.log(state);
        //     return {
        //         studentList: [{
        //             name: 'xialuo',
        //             age: 100,
        //             sid: Date.now()
        //         }, ...state.studentList]
        //     }
        // })
    }

    render() {
        console.log('StudentList render', this.state);

        return (
            <div>
                <Middle studentList={this.state.studentList} time={this.state.time}/>
                {/* {
                    this.state.studentList.map((student, index) => {
                        return <Student key={student.sid} name={student.name} age={student.age} sid={student.sid} />
                    })
                } */}
                <button onClick={this.handleClick}>add yuanhua</button>
                <button onClick={this.handleChange}>change xialuo age</button>
            </div>
        );
    }
}


interface MiddleProps {
    studentList: StudentType[];
    time:number;
};


class Middle extends PureComponent<MiddleProps> {

    constructor(props: MiddleProps) {
        super(props);
    }

    render() {

        console.log('component Middle render...', this.props)

        return (
            <div>
                {
                    this.props.studentList.map((student, index) => {
                        return <Student key={student.sid} name={student.name} age={student.age} sid={student.sid} />
                    })
                }
            </div>
        )
    }
}


interface StudentProps extends StudentType {

}

class Student extends React.PureComponent<StudentProps, any> {
    render() {
        console.log(`Student ${this.props.name} render`);
        // 测试点
        // 1. 当studentList维持的Student数组增加元素，或当数组内某元素修改，使用map渲染的Student组件的渲染情况
        //  场景1:
        //      父组件StudentList，state维持studentsList，子组件Student直接包裹在父组件内，根据studentList.map渲染
        // 答：知识点1. studentList增加元素时，StudentList + yuanhua render，已经渲染的xialuo不会rander
        //      2. 元素修改时，也只会重渲染改变的(直接修改就setState / 创建新数组setState)
        // 原因：PureComponent默认进行name age sid的浅比较，决定shouldWillUpdate，xialuo的return为false
        
        // 2. 层次如下 StudentList Middle(PureComponent 接收studentList) map(Student(PureComponent 接收student age sid))
        //  1. studentList以在oldState直接setState的方式改变，不会引起Middle重渲染，Student也不会更新。如果Middle同时依赖studentList和其他值类型props（如timer），则会Middle重渲染，Student更新
        //  2. studentList以新数组setState，会引起Middle重渲染，从而Student更新
        return (
            <>
                <div>name: {this.props.name}</div>
                <div>age: {this.props.age}</div>
            </>
        );
    }
}

export default StudentList;