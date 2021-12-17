// Recusion

function func1(){
    console.log('one starting');
    func2(); 
    console.log('one ending');
}

function func2(){
    console.log('two starting');
    func3();
    console.log('two ending');
}

function func3(){
    console.log('three starting');
    console.log('three ending');
}

func1();

/**
 * One thing to note is that when 'func1' is called the function will not finish until everything in 'func2' is finish.
 * And everything in 'func2' cannot finish because it has to finish everything in 'func3'. Once everything is done in the 
 * inner most functions. The most outer function will finish being called.
 */