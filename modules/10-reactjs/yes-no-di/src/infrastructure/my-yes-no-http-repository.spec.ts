import { YesNoHttpRepository } from './yes-no-http-repository'
import { when } from 'q';
import { Http } from './http';
import { verify } from 'crypto';


describe('YesNoHttpRepository', () => {
  it('should call http', () => {
    const YesNoMapper = mock(YesNo)
    const http = mock(Http)
    const YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)

    const YesNoHttpRepository = new YesNoHttpRepository(
      instance(http),
      instance(yesNoDtoYesNoMapper)
    )
  await YesNoHttpRepository.find()

    when(Http.get(anyString())).thenResolve()
    when(YesNoMapper.map(object)).thenReturn(yesNo)

    verify(http.get('https://yesno.wtf/api/')).once()
  })


  it('should return a yes or no', () => {
    const http = mock(Http)
    const YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)

    const YesNoHttpRepository = new YesNoHttpRepository(
      instance(http),
      instance(yesNoDtoYesNoMapper)
    )


    when(Http.get('https://yesno.wtf/api/')).thenResolve()
    when(YesNoMapper.map(object)).thenReturn(yesNo)

    const actual = await YesNoHttpRepository.find()

    verify(http.get('https://yesno.wtf/api/')).once()

    expect(actual).toEqual({
      answer: 'yes'
    })
  })
})