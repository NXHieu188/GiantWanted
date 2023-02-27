using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletController : MonoBehaviour
{
    // Start is called before the first frame update
    public ParticleSystem bloodFx;
    public Transform transBulletCamera;
    public Transform transBulletCamera2;
    public float damage;
    public float force;
    private Rigidbody BulletRigid;
    void Awake()
    {
        BulletRigid = GetComponent<Rigidbody>();
    }
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag(NameTag.Enemy))
        {
            ContactPoint contact = collision.GetContact(0);
            Quaternion rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
            Vector3 pos = contact.point;
            SimplePool.Spawn(bloodFx, pos, rot);
            BaseEnemy baseEnemy = collision.gameObject.GetComponentInParent<BaseEnemy>();
            baseEnemy.EnemyHit(damage);
        }
        BulletRigid.velocity = Vector3.zero;
        SimplePool.Despawn(this.gameObject);
    }
}
