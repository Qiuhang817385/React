/* 无状态组件
        使用props,直接{props.key}

    有状态组件
        在render函数里面用props
            写{this.props.key}
        在render函数里面用方法
            写{this.方法名}
        在render函数里面写state
            写{this.state}
        在render函数里面,return外面写js语法并且赋值
        const name = this.state.name
        写this

        return里面使用this,写{name}
 */