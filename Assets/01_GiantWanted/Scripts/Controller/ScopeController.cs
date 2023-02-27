using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class ScopeController : MonoBehaviour
{
    public Image bgFade;
    public Image mainScope;
    private void OnEnable()
    {
        bgFade.DOFade(1, 0.2f).OnComplete(() =>
         {
             GlobalInstance.Instance.gameManagerInstance.controllerOnPoint.isCanShoot = true;
         });
        mainScope.DOFade(1, 0.2f);
    }
    private void OnDisable()
    {
        bgFade.gameObject.transform.DOKill();
        mainScope.gameObject.transform.DOKill();
        var tempColor = bgFade.color;
        tempColor.a = 0;
        bgFade.color = tempColor;

        var tempColor2 = mainScope.color;
        tempColor2.a = 0;
        mainScope.color = tempColor2;
    }
}
