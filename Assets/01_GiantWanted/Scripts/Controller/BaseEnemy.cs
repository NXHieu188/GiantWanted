using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class BaseEnemy : MonoBehaviour
{
    public float hp;
    public float speed;
    public Transform pointTargetMove;
    public Animator anim;
    [SerializeField] private Image hpImg;
    [SerializeField] private GameObject hpBar;
    [HideInInspector] public bool isHit;
    [HideInInspector] public float currentHp;
    [SerializeField] public Transform pointLastShootCam;
    public float posZEnd;
    public void Init()
    {
        //Movement();
        currentHp = hp;
    }
    //void Movement()
    //{
    //    transform.DOMove(pointTargetMove.position, durationMove);
    //}
    public void EnemyHit(float damage)
    {
        currentHp -= damage;

        if (currentHp < 0)
        {
            currentHp = 0;
        }
        hpBar.SetActive(true);
        hpImg.DOFillAmount((currentHp / hp), 0.4f);
        anim.SetTrigger("Hit");
        isHit = true;
        GlobalInstance.Instance.gameManagerInstance.soundManager.PlaySoundGiantHit();
        StartCoroutine(HelperUtility.StartAction(() => { isHit = false; }, 0.7f));
    }
    private void Update()
    {
        if (!isHit)
        {
            if (!GlobalInstance.Instance.gameManagerInstance.isSetToEnd)
            {
                if (transform.position.z <= posZEnd)
                {
                    Luna.Unity.Analytics.LogEvent("Go to destination", 0);
                    GlobalInstance.Instance.gameManagerInstance.SetUpToEnd();
                    GlobalInstance.Instance.gameManagerInstance.SetUpCameraEnd();
                }
                if (transform.position.z > pointTargetMove.position.z)
                {
                    var z = transform.position.z - speed;
                    transform.position = new Vector3(transform.position.x, transform.position.y, z);
                }
            }
        }
    }
}
