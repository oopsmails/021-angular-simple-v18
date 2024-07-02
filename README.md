# Angular 18 Simple Tests

## TOP 6 Mistakes in RxJS code

- AngularTopRxjsMistakes

https://www.youtube.com/watch?v=OhuRvfcw3Tw

- original repo:
https://github.com/DMezhenskyi/angular-top-rxjs-mistakes/tree/ready-solution

### 🕒  Time Codes:
00:00 - Intro
00:00:54 - Project Overview;
00:02:56  - Nested Subscriptions; --> switchMap
00:05:38 - Wrong usage of takeUntil for unsub; --> takeUntil should be at the last of pipe(), or use async!
00:07:20 - Manual Subscriptions; --> toSignal()?? async
00:09:34 - Observable re-execution; --> shareReplay(1)
00:12:20 - Improper usage of distinctUntilChanged(); --> only applicable to primative types, use distinctUntilKeyChanged('userName')
00:14:46 - Brilliant Sponsorship;
00:15:54 - Side Effects in the wrong place; --> side effets in tap(), tap((trimmedConfig) => localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig)))
00:17:40 - Outro;

## Pitfalls Of Using takeUntil and takeUntilDestroyed RxJS Operators

- video: https://www.youtube.com/watch?v=eJs4EJUOnNE

There is an eslint rule that helps to avoid the pitfalls I mentioned - https://github.com/cartant/rxjs-tslint-rules#rxjs-no-unsafe-takeuntil

- toSignal()

00:06:52 - The best way to handle unsubscriptions;



## Error Log:

### Cannot find /public/*.svg

- This could be a temporary bug from Aangular v18.04
- Solution:

https://stackoverflow.com/questions/78526073/what-is-the-proper-way-to-reference-assets-in-the-new-angular-18-public-folder

1. ok, but cannot solve favicon.ico
solution to image in angular 18:

in angular 18 version there is not "assets" folder. if you want to put in your project images, you put the images in the "public" folder and not in the assets folder and you will write in the src of the img the name of the image without any routing.

2. preferred solution:

Me too, I initially had only the /public folder (no /assets folder created by "ng new project-name", Angular CLI 18.0.2), and couldn't load images from /public.

I had to create the "assets" folder myself under "public": /public/assets (and I placed my image here).

Then, `<img src="/assets/test.png">` worked.

