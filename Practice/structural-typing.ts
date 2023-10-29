
interface CourseInterface{
    title:string;
    url:string;
    chapters:number;
}


const refactorCourse:CourseInterface={
    title:'De JavaScript A Typescript',
    url:'http',
    chapters:10
}

type CourseType={
    title:string;
    url:string;
    chapters:number;
}

const creationalPatterns:CourseType={
    title:'De JavaScript A Typescript',
    url:'http',
    chapters:10
}