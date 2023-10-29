type Course ={
    titleC:string;
    urlC:string;
    chaptersC:number;
}

interface Book{
    titleB:string;
    urlB:string;
    chaptersB:number;
}

//Union
type LearningResource = Course | Book


//LearningResource can be a Course or a Book but not both
const LearningResource:LearningResource={
    titleC:'De JavaScript A Typescript',
    urlC:'http',
    chaptersC:10
}
