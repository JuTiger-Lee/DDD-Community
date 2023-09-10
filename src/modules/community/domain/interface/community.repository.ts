/**
 * repository는 저수준 계층이므로 interface 라는 고수준 모듈을 이용해서 의존성을 역전하다.
 */
export interface CommunityRepositoryable {
  create(): Promise<void>;
}
