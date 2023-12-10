import { Users } from "./users";
export const Posts = [
  {
    id: 1,
    user: Users[0].name,
    image: "https://picsum.photos/200/300",
    caption: "Beautiful Day",
    likesCount: 1234,
    postedAt: "6 minutes ago",
    profile_image:Users[0].image,
    comments: [
        {
            id: 1,
            user: "abdullah",
            comment: "Amazing Post",
        },
        {
            id: 2,
            user: "qazx",
            comment: "Nice Post",
        },
        
        ],
  },
  
  {
    id: 2,
    user: Users[2].name,
    image: "https://picsum.photos/200/300",
    caption: "Beautiful Day",
    likesCount: 1234,
    postedAt: "6 minutes ago",
    profile_image:Users[2].image,
    comments: [
        {
            id: 1,
            user: "zaxcv",
            comment: "Amazing Post",
        },
        {
            id: 2,
            user: "plmn",
            comment: "Nice Post",
        },
        
        ],

  },
  
];