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
